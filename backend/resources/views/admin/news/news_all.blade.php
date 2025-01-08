@extends('admin.admin_master')
@section('admin')

<div class="page-content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title">News Data</h4>

                        <table id="datatable" class="table table-bordered dt-responsive text-center" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Banner</th>
                                    <th>New Type</th>
                                    <th>Writer Name</th>
                                    <th>Writer Profile</th>
                                    <th>Date</th>
                                    <th>Viewer</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                @foreach ($allNews as $item)
                                    <tr>
                                        <td>
                                            <p style="width: 270px !important;">
                                                {{ $item->title }}
                                            </p>
                                        </td>
                                        <td>
                                            <img width="80px" src="{{ asset($item->banner) }}" alt="">
                                        </td>
                                        <td>{{ $item->news_type }}</td>
                                        <td>{{ $item->writer_name }}</td>
                                        <td>
                                            <img width="80px" src="{{ asset($item->writer_profile) }}" alt="">
                                        </td>
                                        <td>{{ $item->date }}</td>
                                        <td>
                                            {{ $item->viewer }}
                                        </td>
                                        <td>
                                            <a class="btn btn-info waves-effect waves-linght" href="{{ route('news.edit',$item->id) }}">Update</a>
                                            <a class="btn btn-danger waves-effect waves-linght" href="{{ route('news.delete',$item->id) }}">Delete</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>

                    </div>
                </div>
            </div> <!-- end col -->
        </div> <!-- end row -->
    </div>
</div>

@endsection