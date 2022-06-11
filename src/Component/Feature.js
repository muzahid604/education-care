import React from 'react';

const Feature = () => {
    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold text-center my-10'>Featured topics by category</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/science.png" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Chemistry</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/tech.png" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Technology</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/med.png" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Medical</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/pencil.png" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Design</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/math.png" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Mathematics</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/art-book.png" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Art & Block</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;