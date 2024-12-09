interface Account {
  login: string;
  email: string;
  pass: string;
}

function loadAccounts(): Account[] {
  return JSON.parse(localStorage.getItem("accounts") ?? "[]");
}

function saveAccounts(accounts: Account[]) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function isLoginExists(login: string): boolean {
  const accounts: Account[] = loadAccounts();
  return accounts.findIndex((a) => a.login == login.toLowerCase()) != -1;
}

function isEmailExists(email: string): boolean {
  const accounts: Account[] = loadAccounts();
  return accounts.findIndex((a) => a.email == email.toLowerCase()) != -1;
}

function createAccount(account: Account) {
  let accounts: Account[] = loadAccounts();

  account.login = account.login.toLowerCase();
  account.email = account.email.toLowerCase();
  accounts.push(account);

  saveAccounts(accounts);
}

function currentAuth(): string | null {
  return localStorage.getItem("currentAuth");
}

function auth(ident: string, pass: string): boolean {
  const accounts: Account[] = loadAccounts();

  ident = ident.toLowerCase();
  const index = accounts.findIndex((a) => a.login == ident || a.email == ident);

  if (index == -1) return false;

  if (accounts[index].pass == pass) {
    const login = accounts[index].login;
    localStorage.setItem("currentAuth", login);

    return true;
  } else {
    return false;
  }
}

function logout() {
  localStorage.removeItem("currentAuth");
}

export const useAuthState = () => {
  return {
    createAccount,
    auth,
    logout,
    currentAuth,
    isLoginExists,
    isEmailExists,
  };
};
