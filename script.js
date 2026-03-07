async function sendPost(){

 const text = document.getElementById("post").value

 const res = await fetch("/api/gemini",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body:JSON.stringify({prompt:text})
 })

 const data = await res.json()

 const timeline = document.getElementById("timeline")

 const user = document.createElement("p")
 user.textContent = "👤 "+text

 const ai = document.createElement("p")
 ai.textContent = "🤖 "+data.text

 timeline.appendChild(user)
 timeline.appendChild(ai)

}
