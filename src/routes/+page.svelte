<script lang="ts">
    import { onMount } from "svelte";

    let settings: Settings;
    let response: any;

    function startDelay(lengthOfDelay: number) {
        return new Promise(resolve => {
            setTimeout(resolve, lengthOfDelay);
        });
    };

    const resetResponse = async (value: any) => {
        await startDelay(4000).then(() => {
            response = "";
        });
    }

    $: resetResponse(response);

    onMount(() => {
        const data = { ...localStorage };
        settings = JSON.parse(data.settings);
    });

    const postMessage = async () => {
        if(!settings.id || !settings.channel) {
            return
        }

        const req = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({...settings})
        });

        if(!req.ok) {
            response = req.statusText;
        }else {
            response = await req.json();
        }
    }

</script>

<div class="bg-neutral-800 w-full h-[100vh] flex flex-col items-center justify-center">
    {#if response }
        <p class="text-white">{response}</p>
    {/if}
    <button on:click={postMessage} class="button bg-blue-500 text-white shadow-xl rounded-lg m-3  py-1 px-2 text-xl font-bold uppercase">NOTIFY DISCORD</button>
</div>