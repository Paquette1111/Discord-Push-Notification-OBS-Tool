<script lang=ts>
    import { onMount } from "svelte";

    let settings: Settings = {
        id: "",
        channel: "",
        msg: "",
        url: "",
        at: ""
    }

    onMount(() => {
        const data = { ...localStorage };
        settings = JSON.parse(data.settings);
    });

    const updateSettings = () => {
        window.localStorage.setItem('settings', JSON.stringify(settings));
    }
     
</script>

<div class="bg-neutral-800 w-full h-[100vh] gap-2 flex flex-col items-center justify-center p-5">
    <input on:change={updateSettings} type="password" bind:value={settings.id} placeholder="Bot Secret" class="input w-full max-w-2xl border-2 border-neutral-100 rounded-xl px-2 py-1">
    <input on:change={updateSettings} type="text" bind:value={settings.channel} placeholder="Text Channel ID" class="w-full max-w-2xl input border-2 border-neutral-100 rounded-xl px-2 py-1">
    <input on:change={updateSettings} type="text" bind:value={settings.at} placeholder="@everyone" class="w-full max-w-2xl input border-2 border-neutral-100 rounded-xl px-2 py-1">
    <input on:change={updateSettings} type="text" bind:value={settings.msg} placeholder="Message" class="w-full max-w-2xl input border-2 border-neutral-100 rounded-xl px-2 py-1">
    <input on:change={updateSettings} type="text" bind:value={settings.url} placeholder="Twitch URL" class="w-full max-w-2xl input border-2 border-neutral-100 rounded-xl px-2 py-1">
</div>