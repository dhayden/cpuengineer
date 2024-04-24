import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from datetime import datetime


def generate_article(prompt, new_tokens=500):
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

    if tokenizer.pad_token is None:
        tokenizer.add_special_tokens({'pad_token': tokenizer.eos_token})

    model = GPT2LMHeadModel.from_pretrained("gpt2")
    model.resize_token_embeddings(len(tokenizer))
    model.eval()

    # Encode the prompt
    inputs = tokenizer(prompt, return_tensors='pt', padding='longest', truncation=True)
    input_ids = inputs['input_ids']
    attention_mask = inputs['attention_mask']

    with torch.no_grad():
        outputs = model.generate(
            input_ids,
            attention_mask=attention_mask,
            max_new_tokens=new_tokens,  # Generate exactly 'new_tokens' new tokens
            pad_token_id=tokenizer.pad_token_id,
            num_beams=5,
            no_repeat_ngram_size=2,
            early_stopping=True
        )

    generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    current_date = datetime.now().strftime("%Y-%m-%d")
    html_content = f"<h2>{current_date}</h2>\n<p>{generated_text}</p>\n"
    return html_content


def append_daily_article(file_path, article):
    with open(file_path, "a") as file:
        file.write(article + "<hr>")


# Example usage:
prompt = "Here are some reasons why programming every day is beneficial:"
new_article = generate_article(prompt)
append_daily_article("daily_articles.html", new_article)
