async function getUser() {
  try {
    const { data, error } = await supabaseClient.auth.getUser();
    if (error) throw error;
    return data?.user;
  } catch (err) {
    console.error('Get user error:', err);
    return null;
  }
}

async function requireLogin() {
  const user = await getUser();
  if (!user) {
    window.location.href = "login.html";
  }
  return user;
}

async function signup(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password
    });

    if (error) throw error;

    alert("Account created! Please check your email for confirmation.");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
}

async function login(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) throw error;

    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}
