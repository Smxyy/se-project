<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <!-- User details -->
        <div class="user-profile text-center mt-3">
            <div class="">
                <img 
                {{-- src="{{ url('no_image.jpg') }}"  --}}
                src="{{ asset('backend/assets/no_image.jpg') }}"
                alt="" class="avatar-md rounded-circle object-cover">
            </div>
            <div class="mt-3">
                <h4 class="font-size-16 mb-1">{{Auth::user()->name}}</h4>
                <span class="text-muted"><i class="ri-record-circle-line align-middle font-size-14 text-success"></i> Online</span>
            </div>
        </div>
        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Menu</li>
                <li>
                    <a href="{{ route('dashboard') }}" class="waves-effect">
                        <i class="ri-home-heart-line"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a  href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-user-heart-line"></i>
                        <span>Admin</span>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#">All Profile</a></li>
                        <li><a href="#">New Profile</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-earth-line"></i>
                        <span>User Page</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>User</a>
                            <ul class="sub-menu">
                                <li><a href="#">All User</a></li>
                                <li><a href="#">Add New User</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Author</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Author</a></li>
                                <li><a href="#">Add New Author</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Publisher</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Publisher</a></li>
                                <li><a href="#">Add New Publisher</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Address</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Address</a></li>
                                <li><a href="#">Add New Address</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a  href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-earth-line"></i>
                        <span>Book</span>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#">All Book</a></li>
                        <li><a href="#">New Book</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-earth-line"></i>
                        <span>Order Page</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Order</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Order</a></li>
                                <li><a href="#">Add New Order</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>OrderDetail</a>
                            <ul class="sub-menu">
                                <li><a href="#">All OrderDetail</a></li>
                                <li><a href="#">Add New OrderDetail</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Analytics</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Analytics</a></li>
                                <li><a href="#">Add New Analytics</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-earth-line"></i>
                        <span>Category Page</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Category</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Category</a></li>
                                <li><a href="#">Add New Category</a></li>
                                <li><a href="#">Edit Category</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Book Category</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Book Category</a></li>
                                <li><a href="#">Add Book Category</a></li>
                                <li><a href="#">Edit Book Category</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>WishList</a>
                            <ul class="sub-menu">
                                <li><a href="#">All WishList</a></li>
                                <li><a href="#">Add WishList</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Notification</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Notification</a></li>
                                <li><a href="#">Add Notification</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="ri-earth-line"></i>Review</a>
                            <ul class="sub-menu">
                                <li><a href="#">All Review</a></li>
                                <li><a href="#">Add Review</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a  href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-earth-line"></i>
                        <span>Payment</span>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#">All Payment</a></li>
                        <li><a href="#">New Payment</a></li>
                    </ul>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>