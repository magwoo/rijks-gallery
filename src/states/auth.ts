interface Account {
  login: string;
  email: string;
  pass: string;
}

function load(): Account[] {
  return JSON.parse(localStorage.getItem("accounts") ?? "[]");
}

function save(accounts: Account[]) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function isLoginExists(login: string): boolean {
  const accounts: Account[] = load();
  return accounts.findIndex((a) => a.login == login.toLowerCase()) != -1;
}

function isEmailExists(email: string): boolean {
  const accounts: Account[] = load();
  return accounts.findIndex((a) => a.email == email.toLowerCase()) != -1;
}

function createAccount(account: Account) {
  let accounts: Account[] = load();

  account.login = account.login.toLowerCase();
  account.email = account.email.toLowerCase();
  accounts.push(account);

  save(accounts);
}

function checkAuth(ident: string, pass: string): boolean {
  const accounts: Account[] = load();

  ident = ident.toLowerCase();
  const index = accounts.findIndex((a) => a.login == ident || a.email == ident);

  if (index == -1) return false;

  return accounts[index].pass == pass;
}

export const useAuthState = () => {
  return {
    createAccount,
    checkAuth,
    isLoginExists,
    isEmailExists,
  };
};
