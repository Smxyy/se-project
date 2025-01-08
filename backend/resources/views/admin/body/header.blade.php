<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box d-flex">
                <a href="{{ route('dashboard') }}" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="{{ asset('../backend/assets/images/logo.png') }}" alt="logo-sm-light" height="80">
                    </span>
                    <span class="logo-lg">
                        <img src="{{ asset('../backend/assets/images/logo.png') }}" alt="logo-light" height="80">
                    </span>
                </a>
                <p class="d-none d-xl-inline-block text-white pt-4 font-size-24">ReadOria</p>
            </div>
        </div>
        
        <div class="d-flex">
            <div class="dropdown d-inline-block user-dropdown">
                <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i class="ri-fullscreen-line"></i>
                </button>

                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle header-profile-user object-cover" 
                        src="{{ asset('backend/assets/no_image.jpg') }}"
                        {{-- src="{{ (!empty($adminData->profile_image))? url('upload/admin_images/'.$adminData->profile_image): url('no_image.jpg') }}" --}}
                        alt="Header Avatar">
                    <span class="d-none d-xl-inline-block ms-1">{{ Auth::user()->name }}</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                
                <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="{{ route('admin.profile.profile_admin') }}"><i class="ri-user-line align-middle me-1"></i> Profile</a>
                    <a class="dropdown-item" href="#"> {{ Auth::user()->email }}</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="{{ route('admin.logout') }}"><i class="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                </div>

            </div>
        </div>
    </div>
</header>