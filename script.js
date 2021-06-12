var captcha_version = 16;
var captcha_done = false;
var captcha_label = document.currentScript.getAttribute('label');
var captcha_enemies = parseInt(document.currentScript.getAttribute('enemies'));
if (!captcha_enemies) {
    captcha_enemies = 4;
}

var captcha_html = '';
if (captcha_label) {
    captcha_html = '<p>' + captcha_label + '<br>';
}

captcha_html += '<iframe id="doom_captcha" src="https://dutch-dog.github.io/doomcaptcha/captcha.html?version=' + captcha_version + '&countdown=' + document.currentScript.getAttribute('countdown') + '&enemies=' + captcha_enemies + '" style="width:300px;height:150px;border:2px black solid;"></iframe>';

if (captcha_label) {
    captcha_html += '</p>';
}

document.write(captcha_html);

window.addEventListener('message', function(e) {
    captcha_done = true;
    document.getElementById('doom_captcha').closest('form').action = 'https://getform.io/f/d00fb9d4-307e-4741-81df-5ac0447d7af6';
    document.getElementById('doom_captcha').style.borderColor = 'black';
}, false);

document.getElementById('doom_captcha').closest('form').addEventListener('submit', function() {
    if (!captcha_done) {
        document.getElementById('doom_captcha').style.borderColor = 'red';
        event.preventDefault();
        return;
    }
});
