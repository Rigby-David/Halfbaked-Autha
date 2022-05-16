// Enter Supabase Information
const SUPABASE_URL = 'https://wyotgiskxqtlavlkrzle.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

// signs an new user in and puts an auth token in local storage in the browser
export async function sigUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signInUser(email, password) {}

// when a user tries to visit a page that calls this function, we automatically redirect the user back to the login page if they are not logged in
// calls getUser
export async function checkAuth() {}

// when a user tries to visit a page that calls this function, we automatically redirect the user away from the login page if they are already logged in
// calls getUser
export async function redirectIfLoggedIn() {}

// removes the token from local storage and redirects the user home
export async function logout() {}
