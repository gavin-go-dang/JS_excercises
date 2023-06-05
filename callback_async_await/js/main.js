const form = document.getElementById("form-QA-input");


async function get_answer(question_context){
    const response = await fetch(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
            headers: {Authoriztion: "Bearer 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"},
            method: "POST",
            body: JSON.stringify(question_context)

        }
    )
    const result = await response.json();

    console.log(result['answer']);
    const output = document.getElementById("answer_text");
    output.innerHTML = result['answer'];
}

form.addEventListener("submit", (event) => {   

    event.preventDefault(); 

    const formData = new FormData(form);
    const data =  Object.fromEntries(formData.entries());
    const response = get_answer(data);
});
