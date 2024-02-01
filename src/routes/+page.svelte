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

<div class="bg-[#2b2e38] w-full h-[100vh] flex flex-col items-center justify-center px-1">
    {#if response }
        <p class="text-white">{response}</p>
    {/if}
    <button on:click={postMessage} class="bg-[#3c404b] hover:bg-[#4f535e] cursor-default rounded-[4px] w-full text-sm font-open text-white m-3 py-2 font-['Open Sans'] px-2">Notify Discord</button>
</div>