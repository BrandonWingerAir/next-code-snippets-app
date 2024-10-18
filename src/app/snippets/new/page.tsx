export default function CreateSnippet() {
    return <form>
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
                <label htmlFor="snippet" className="w-12">
                    Snippet
                </label>
                <textarea 
                    name="snippet" 
                    className="border rounded p-2 w-full" 
                    id="snippet"
                />
            </div>

            <button type="submit" className="rounded p-2 bg-blue-200">
                Save Snippet
            </button>
        </div>
    </form>
}