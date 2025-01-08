@extends('admin.admin_master')
@section('admin')

<div class="page-content">
    <div class="container-fluid ">
        <div style="overflow: hidden;width:1248px;height:680px" class="slide position-relative">
            <img class="w-100 h-100 position-absolute object-cover" src="{{ asset('backend/assets/images/auth-bg.jpg') }}" alt="">
            <div style="background-color: #0000007a;" class="container-fluid d-flex align-items-center justify-content-center position-absolute p-0 h-100">
                <div class="box text-center">
                    <h1>Welcome to {{ Auth::user()->name }}</h1>
                    <h1 class="text-warning">___ {{ Auth::user()->name }} ___</h1>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection