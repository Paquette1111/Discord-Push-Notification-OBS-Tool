<script lang="ts">
    import { onMount } from "svelte";
    import Fa from 'svelte-fa'
    import { faGear } from '@fortawesome/free-solid-svg-icons'


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
    <span class="flex flex-row w-full gap-1">
        <button on:click={postMessage} class="btn font-['Open Sans']">Notify Discord</button>
        <a href="/settings" class="btn max-w-fit flex flex-col justify-center !px-3">
            <Fa icon={faGear} size="md"/>
        </a>
    </span>
</div>