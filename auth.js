async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  return data?.user;
}

async function requireLogin() {
  const user = await getUser();
  if (!user) {
    window.location.href = "login.html";
  }
}

async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account created! Please login.");
  window.location.href = "login.html";
}

async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert(error.message);
    return;
  }

  window.location.href = "index.html";
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}
