import React from 'react'

const Breadcrumb = () => {
  return (
    <div>
      <nav className='bread mt-5' style={{marginLeft: "78px"}} aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
