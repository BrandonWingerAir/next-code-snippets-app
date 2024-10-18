import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function CreateSnippetForm() {
    async function createSnippet(formData: FormData) {
        // Server Action
        'use server';

        // Validate user inputs
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;

        // Create record in database
        const snippet = await db.snippet.create({
            data: {
                title,
                content
            }
        });

        console.log(snippet);

        // Redirect to home route
        redirect('/');
    }

    return (
        <form action={createSnippet}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="title" className="w-12">
                        Title
                    </label>
                    <input 
                        name="title" 
                        className="border rounded p-2 w-full" 
                        id="title"
                    />
                </div>

                <div className="flex gap-4">
                    <label htmlFor="content" className="w-12">
                        Snippet
                    </label>
                    <textarea 
                        name="content" 
                        className="border rounded p-2 w-full" 
                        id="content"
                    />
                </div>

                <button type="submit" className="rounded p-2 bg-blue-200">
                    Save Snippet
                </button>
            </div>
        </form>
    );
}