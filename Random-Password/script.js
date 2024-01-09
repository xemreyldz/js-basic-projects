const passwordBox = document.getElementById("password");
const passwordlength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+-=+*/"

const allChars = upperCase + lowercase + number + symbol;

function createPassword()
{
    let password = "";
    password += upperCase[Math.floor(Math.random() *upperCase.length)];
    password += lowercase[Math.floor(Math.random() *lowercase.length)];
    password += number[Math.floor(Math.random() *number.length)];
    password += symbol[Math.floor(Math.random() *symbol.length)];

    while (passwordlength > password.length)
    {
        password += allChars[Math.floor(Math.random()* allChars.length)]
    }
    passwordBox.value = password;
 

}


function copyPassword() {
    passwordBox.select();
    try {
        navigator.clipboard.writeText(passwordBox.value).then(() => {
            alert("Parola kopyalandı!");
        }).catch(err => {
            console.error('Parola kopyalanırken bir hata oluştu:', err);
        });
    } catch (err) {
        console.error('Navigator clipboard desteklenmiyor:', err);
    }
}
