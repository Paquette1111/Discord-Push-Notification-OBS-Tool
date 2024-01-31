import { RequestHandler } from "@sveltejs/kit";
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async ( {request}) => {
    const info = await request.json();
    const message = `${info.msg ?? ''} ${info.at ?? ''} ${info.url ?? ''}`;
    const DISCORD_API = 'https://discord.com/api/v9';

    const response = await fetch(`${DISCORD_API}/channels/${info.channel}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': `Bot ${info.id}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        })
    });

    if (response.ok) {
        return new Response(JSON.stringify('Message sent successfully to Discord.'));
    } else {
        error(500, 'There was an error');
    }
};