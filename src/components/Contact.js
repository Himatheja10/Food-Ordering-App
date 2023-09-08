const Contact = () => {
    return (
        <div>
            <h1 className="font-bold m-4 p-4 text-3xl">THis is my contact</h1>
            <form>
                <input className="m-2 p-2 border border-black" placeholder="Name"/>
                <input className="m-2 p-2 border border-black" placeholder="Message"/>
                <button className="m-2 p-2 border border-black rounded-lg bg-gray-100">submit</button>
            </form>
        </div>
    )
}

export default Contact;