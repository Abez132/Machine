const Contact=()=>{
    return(
        <div className="bg-white">
            <form  className="w-full">
        <label htmlFor="comment">Comment:</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          required
          className="w-full border border-gray-300 h-32 mb-3 rounded resize-none"
          
          
        ></textarea>
        <br />

        <label htmlFor="name">Name*</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="w-full h-10 mb-3 border-gray-300 border"
          required
          
          
        />
        <br />

        <label htmlFor="email">Email*</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full h-10 mb-3 border-gray-300 border"
          required
          
          
        />
        <br />

        <label htmlFor="website">Website (optional)</label>
        <br />
        <input
          type="url"
          id="website"
          name="website"
          className="w-full h-10 mb-3 border-gray-300 border"
          
          
        />
        <br />

        <input
          type="checkbox"
          id="saveInfo"
          name="saveInfo"
          className="my-5 hover:cursor-pointer"
          
          
        />
        <label htmlFor="saveInfo" className="m-3">
          Save my name, email, and website in this browser to the next time I comment.
        </label>
        <br />

        <input
          type="submit"
          className="bg-black text-white m-3 ml-0 rounded-3xl w-40 h-10 hover:bg-gray-900 hover:cursor-pointer"
          value="Post Comment" 
        />
      </form>
        </div>
    )
}

export default Contact;