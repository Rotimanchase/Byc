import React, { useEffect, useState } from 'react'

const Breadcrumbs = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    
    useEffect(() => {
        // set breadcrumbs data here
        const breadcrumbData = [
            {label: 'Home', path: '/'},
            {label: 'About Us', path: '/about'},
            {label: 'Contact Us', path: '/contact'},
            {label: 'Product All', path: '/product'},
            {label: 'Blogs', path: '/blog2'}
        ];
        setBreadcrumbs(breadcrumbData);
    }, [])

    return (
        <div>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    {
                        breadcrumbs.map((breadcrumb, index) => (
                            <li key={index} className='breadcrumb-item'>
                                {
                                    index === breadcrumbs.length - 1 ? (
                                        <span>
                                            {breadcrumb.label}          
                                        </span>
                                    ):(
                                        <a href={breadcrumb.path}>
                                            {breadcrumb.label} 
                                        </a>
                                    )
                                }
                            </li>
                        ))
                    }
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs