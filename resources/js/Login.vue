<template>
    <main class="main-wrapper">
     cdftvgbhjnkmdcdtfvgbhjn

       <!--  Start Offcanvas Mobile Menu Section -->
       <div id="mobile-menu-offcanvas" class="offcanvas offcanvas-leftside offcanvas-mobile-menu-section">
           <!-- Start Offcanvas Header -->
           <div class="offcanvas-header flex-end">

               <div class="logo">
                   <a to="index-2.html"><img class="img-fluid" width="147" height="26" src="assets/images/logo.png" alt="image"></a>
               </div>

               <button class="offcanvas-close" aria-label="offcanvas svg icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="5.973" height="10.449" viewBox="0 0 5.973 10.449">
                       <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.051,11.417,17,7.466a.747.747,0,0,0-1.058-1.054l-4.479,4.476a.745.745,0,0,0-.022,1.03l4.5,4.507A.747.747,0,1,0,17,15.37Z" transform="translate(-11.251 -6.194)" />
                   </svg>
               </button>
           </div>
           <!-- End Offcanvas Header -->

         
       </div> <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

   sadasdasdasdasdsads
       <div class="offcanvas-overlay"></div>

       <!-- ...:::Start Search & Filter Section:::... -->
       
       <!-- ...:::End Search & Filter Section:::... -->

       

       <!-- ...:::Start Catagories - 1 Section:::... -->
       <div class="catagories-section section-gap-top-50">
           <div class="container">
            
               <div class="title-content">
                   <h2 class="title">Welcome to DENSA</h2>
               </div>
               <div class="catagories-wrapper">
                   <div class="catagories-wrapper-content">
                       <!-- Start Product Single Item -->
                      
                       <!-- ENd Product Single Item -->
                       <!-- Start Product Single Item -->
                       <div class="single-product-item product-item--style-1 product-item--bg-maya-blue">
                           <router-link to="/diagnosis" class="image">
                               <img width="126" height="98" class="img-fluid" src="diagnosis.png" alt="image">
                           </router-link>
                           <div class="content">
                               <div class="content--left">
                                  
                                   <router-link to="/diagnosis" class="title">Send case to a dermatologist</router-link>
                                
                               </div>
                              
                           </div>
                       </div>
                       <!-- ENd Product Single Item -->
                       <!-- Start Product Single Item -->
                       <div class="single-product-item product-item--style-1 product-item--bg-gold">
                           <router-link to="/glossary" class="image">
                               <img width="127" height="98" class="img-fluid" src="glossary.png" alt="image">
                           </router-link>
                           <div class="content text-center">
                               <div class="content--center text-center">
                                  
                                   <router-link to="/glossary" class="title text-center">Glossary of Skin NTDs</router-link>
                                
                               </div>
                              
                           </div>
                       </div>
                       <!-- ENd Product Single Item -->

                        <div class="single-product-item product-item--style-1 product-item--bg-lime-green">
                           <router-link to="/admin/doctor/create" class="image">
                               <img width="127" height="98" class="img-fluid" src="signs.png" alt="image">
                           </router-link>
                           <div class="content">
                               <div class="content--left">
                                   
                                   <router-link to="/signsandsymptoms" class="title">I Am A Dermatologist</router-link>
                                
                               </div>
                              
                           </div>
                       </div>
                      

                      <div class="single-product-item product-item--style-1 product-item--bg-lime-green">
                           <a target="_blank" href="https://densaapp.com/makeareport/" class="image">
                               <img width="127" height="98" class="img-fluid" src="makereport.png" alt="image">
                           </a>
                           <div class="content">
                               <div class="content--left">
                                   
                                   <a target="_blank" href="https://densaapp.com/makeareport/" class="title">Report notifiable disease</a>
                                
                               </div>
                              
                           </div>
                       </div>
                     
                    
                       <!-- ENd Product Single Item -->
                   </div>
               </div>

             

           </div>
       </div>
       <!-- ...:::Start Catagories - 1 Section:::... -->

       <!-- ...:::Start User Event Section:::... -->
       <!-- <BottomBar></BottomBar> -->
       <!-- ...:::End User Event Section:::... -->

       <footer class="footer-section"></footer>
   </main>
</template>

<script>
export default {
   name: 'Login',

   data() {
       return {
           
       };
   },
   created(){
    console.log("hghhhhhh");
    //     this.$progress.start();

    //    this.$router.beforeEach((to, from, next) => {
    //    this.$progress.start();
    //    next();
    //    });

    //    this.$router.afterEach((to, from) => {
    //    this.$progress.finish();
    //    });
   },
   mounted() {
    //    this.$progress.finish();
       // let instance = this.$toast.success('You did it',{position: 'bottom'});
   },

   methods: {
       
   },
};
</script>