<template>
  <div class="Login">
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="save" />
        <label class="form-check-label" for="save">Save password</label>
      </div>
      <button type="login" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>
