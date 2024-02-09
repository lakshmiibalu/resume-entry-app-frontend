import React from 'react'
import { Link } from 'react-router-dom'

const ResumeNav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Resume App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
        <Link class="nav-link" to="/signin">Signin</Link>
        <Link class="nav-link" to="/add">Add Resume</Link>
        <Link class="nav-link" to="/view">View Resume</Link>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default ResumeNav