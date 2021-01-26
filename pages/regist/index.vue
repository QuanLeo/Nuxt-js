<template>
  <section class="signup">
    <div class="container">
      <div class="signup-content">
        <div class="signup-form">
          <h2 class="form-title">Sign up</h2>
          <form method="POST" class="register-form" id="register-form">
            <div class="form-group">
              <label for="name"
                ><i class="zmdi zmdi-account material-icons-name"></i
              ></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <label for="email"><i class="zmdi zmdi-email"></i></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <label for="pass"><i class="zmdi zmdi-lock"></i></label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="re-pass"
                ><i class="zmdi zmdi-lock-outline"></i
              ></label>
              <input
                type="password"
                name="re_pass"
                id="re_pass"
                placeholder="Repeat your password"
              />
            </div>
            <div class="form-group">
              <input
                type="checkbox"
                name="agree-term"
                id="agree-term"
                class="agree-term"
              />
              <label for="agree-term" class="label-agree-term"
                ><span><span></span></span>I agree all statements in
                <a href="#" class="term-service">Terms of service</a></label
              >
            </div>
            <div class="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                class="form-submit"
                value="Register"
              />
            </div>
          </form>
        </div>
        <a href="/login" class="signup-image-link">I am already member</a>
        <div class="signup-image">
          <figure>
            <img src="~assets/images/signup-image.jpg" alt="sing up image" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style  scoped>
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    margin: 0;
}
img { max-width: 100%; height: auto; }
figure { margin: 0; }
p { margin-bottom: 0px; font-size: 15px; color: #777;}
h2 { 
    line-height: 1.66; 
    margin: 0; 
    padding: 0;
    font-weight: bold; 
    font-family: Poppins;
    font-size: 36px;
}
.main { 
    background: #f8f8f8;
    padding: 150px 0;
}
.clear { clear: both; }
body {
	font-size: 13px;
    line-height: 1.8;
    background: #f8f8f8;
    font-weight: 400;
    font-family: Poppins;
}
.container {
    width: 900px;
    background: #fff;
    margin: 0 auto;
}
  
.position-center {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>