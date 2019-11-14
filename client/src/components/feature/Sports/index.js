import React from 'react';

const OurSports = () => {
   
    return (
        <>
            <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-2" data-slide-to="1"></li>
                    <li data-target="#carousel-example-2" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" src="images/unsplash.jpg"
                                alt="First slide" height="600" />
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="view">
                            <img class="d-block w-100" src="images/soccer.jpg"
                                alt="Second slide" height="600" />
                            <div class="mask rgba-black-strong"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Strong mask</h3>
                            <p>Secondary text</p>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="view">
                            <img class="d-block w-100" src="images/students.jpg"
                                alt="Third slide" height="600" />
                            <div class="mask rgba-black-slight"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Slight mask</h3>
                            <p>Third text</p>
                        </div>
                    </div>
                </div>




            </div>
           

            <hr class="featurette-divider" />

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading text-secondary text-center">Life<span className="w3-text-orange">Hoops</span></h2>
                    <ul>
                        <p class="lead"><i className="fas fa-check"> 94% of parents believe that LifeHoops has helped their child develop on the court, and 88% believe it has helped their child develop off the court.</i></p>
                        <p class="lead"><i className="fas fa-check"> 67% of LifeHoops participants self-reported trying hard in school almost every day, vs. 42% before the program.</i></p>
                        <p class="lead"><i className="fas fa-check"> 100% of LifeHoops participants self-reported enjoying playing basketball and trying to get better almost every day.</i></p>
                        <p class="lead"><i className="fas fa-check"> Average GPA of LifeHoops participants rose from 2.0 to 2.3 for participants with 80% attendance in 60 days.</i></p>
                    </ul>
                </div>
                <div class="col-md-5">
                    <img src="https://lifesports.org/wp-content/uploads/lifehoops-large.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading text-secondary text-center">Life<span className="w3-text-blue">Kicks</span></h2>
                    <ul>
                        <p class="lead"><i className="fas fa-check"> 13.4% of the Charlotte population identifies as Hispanic, with 27% of this population living below the poverty line.</i></p>
                        <p class="lead"><i className="fas fa-check"> 31% of Hispanic millennials are soccer fans, 2x the general population..</i></p>
                        <p class="lead"><i className="fas fa-check"> 42% of Albermarle Road Middle School students are Hispanic.</i></p>
                        <p class="lead"><i className="fas fa-check"> Studies have shown that children who participate in high-quality programs outside of school make better grades, have fewer behavioral problems, and perform better on tests. The average cost of club soccer in Charlotte is $1,500-$1,900 per year.</i></p>
                    </ul>
                </div>
                <div class="col-md-5 order-md-1">
                    <img src="https://lifesports.org/wp-content/uploads/bb-plugin/cache/life-kicks-logo-large-landscape.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                </div>
            </div>

            <hr class="featurette-divider" />

            <div class="container-fluid">
            
                    <h2 class="featurette-heading text-center">Our Impact</h2>
                    <ul>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen width="100%"></iframe>
                        </div>
                        
                    </ul>
                
            </div>

            <hr class="featurette-divider" />
                        
        </>
    )
}

export default OurSports