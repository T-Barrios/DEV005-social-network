function buttonGoogle() {
  const container = document.createElement('div');
  const button = `
<div class="google-icon-wrapper">
<img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
</div>
<p class="btn-text">Sign in with google</p>`;
  container.setAttribute('class', 'google-btn');
  container.innerHTML = button;
  return container;
}

export default buttonGoogle;
