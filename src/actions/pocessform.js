"use server";

export async function processForm(state, formData) {
  console.log("server");
  console.log(formData);
  const name = formData.get("name");
  const email = formData.get("name");
  const message = formData.get("name");
}
