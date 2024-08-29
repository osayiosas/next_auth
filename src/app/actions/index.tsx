'use server';

export async function socialLogin(formData: FormData) {

    const action = formData.get('action');

    console.log(action);

}



export async function socialLogout(){

}