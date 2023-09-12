<template>
<div>
    <nav>
    <ul class="container">
        <li><a href='/hello'>Home</a></li>
        <li class='dropdown'>
        <a href='/finance'>Finance <i class="fa fa-angle-down"></i></a>
        <div class='mega-menu'>
            <div class="container">
            <div class="item">
                <h3>Functions</h3>
                <ul>
                    <li><a href='#'>Search History</a></li>
                    <li><a href='#'>New Expense</a></li>
                    <li><a href='#'>Chart</a></li>
                    <li><a href='#'>Cooperative Savings</a></li>
                    <li><a href='#'>Dream List</a></li>
                </ul>
            </div> <!-- /.item -->
            <div class="item">
                <h3>Plan</h3>
                <ul>
                    <li><a href='#'>Budget Plan</a></li>
                    <li><a href='#'>Investment Plan</a></li>
                    <li><a href='#'>Others</a></li>
                </ul>
            </div> <!-- /.item --> 
            <div class="item">
                <h3>Preserved Space 1</h3>
                <img src="http://placehold.it/200x200">
            </div> <!-- /.item -->
            <div class="item">
                <h3>Preserved Space 2</h3>
                <img src="http://placehold.it/200x200">
            </div> <!-- /.item -->
            </div><!-- /.container -->
        </div><!-- /.mega-menu -->
        </li><!-- /.dropdown -->
        <li class='dropdown'>
        <a href='#'>Life<i class="fa fa-angle-down"></i> </a>
        <div class='mega-menu'>
            <div class="container">
            <div class="item">
                <h3>Plan</h3>
                <ul>
                    <li><a href='#'>Travel Plan</a></li>
                    <li><a href='#'>Cycling Plan</a></li>
                    <li><a href='#'>Training Plan</a></li>
                    <li><a href='#'>Piano Pieces Plan</a></li>
                    <li><a href='#'>Other Plans</a></li>
                </ul>
            </div> <!-- /.item -->
            <div class="item">
                <h3>Completed</h3>
                <ul>
                    <li><a href='#'>Travels</a></li>
                    <li><a href='#'>Cycling</a></li>
                    <li><a href='#'>Training</a></li>
                    <li><a href='#'>Piano Pieces</a></li>
                </ul>
            </div> <!-- /.item -->
            
            <div class="item">
                <h3>Memories</h3>
                <img src="http://placehold.it/200x200">
            </div> <!-- /.item -->
            
            </div><!-- .container -->
        </div><!-- .mega-menu-->
        </li><!-- .dropdown -->
        <li class='dropdown'><a href='#'>Personal Small Projects</a>
        <div class='mega-menu'>
            <div class="container">
                <div class="item">
                <h3>Dummy Project1</h3>
                <ul>
                    <li><a href='#'>Dummy</a></li>
                    <li><a href='#'>Dummy</a></li>
                </ul>
                </div> <!-- /.item -->
                <div class="item">
                <h3>Dummy Project2</h3>
                <ul>
                    <li><a href='#'>Dummy</a></li>
                    <li><a href='#'>Dummy</a></li>
                </ul>
                </div> <!-- /.item -->
                <div class="item">
                <h3>Dummy Project3</h3>
                <ul>
                    <li><a href='#'>Dummy</a></li>
                    <li><a href='#'>Dummy</a></li>
                </ul>
                </div> <!-- /.item -->
            </div>
        </div></li>
        <li><a href='#'>Notes</a></li>
    </ul><!-- .container -->
    </nav>

</div>
</template>

<script>
  export default {
    name: 'appHeader',
  };
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    a {text-decoration: none;}

    .container {
        margin: auto;
        width: 1000px;
    }

    ul {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
    }

    nav {
        background: #68baf0;
        font-size: 0;
        position: relative;
        
    }

    nav > ul > li {
        display: inline-block;
        font-size: 18px;
        padding: 0 15px;
        position: relative;
    }

    nav > ul > li > a {
        color: #fff;
        display: block;
        padding: 20px 0;
        border-bottom: 3px solid transparent;
        transition: all .3s ease;
    }
    nav > ul > li:hover > a {
        color: #444; 
        border-bottom: 3px solid #444;
    }

    .mega-menu {
        background: #d3d3d3;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
        position: absolute;
        left: 0;
        width: 100%;
        padding-bottom: 20px;
    }
    .mega-menu h3 {color: #444;}

    .mega-menu .container {
        display: flex;
    }
    .mega-menu .item {
        flex-grow: 1;
        margin: 0 10px;
    }
    .mega-menu .item img {
        width: 100%;
    }
    .mega-menu a {
        border-bottom: 1px solid #ddd;
        color: #4ea3d8;
        display: block;
        padding: 10px 0;
    }
    .mega-menu a:hover {color: #01314f;}


    .dropdown {position: static;}

    .dropdown:hover .mega-menu {
        visibility: visible;
        opacity: 1;
    }
</style>