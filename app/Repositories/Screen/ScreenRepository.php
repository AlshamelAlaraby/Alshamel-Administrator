<?php

namespace App\Repositories\Screen;

use App\Exceptions\NotFoundException;
use App\Models\Screen;
use Illuminate\Support\Facades\DB;

class ScreenRepository implements ScreenRepositoryInterface
{

    public function __construct(private Screen $model)
    {}

    public function getAllScreens($request)
    {
        $models = $this->model->where(function ($q) use ($request) {
            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }

            }
            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('name_e', 'like', '%' . $request->search . '%')
                    ->orWhere('title', 'like', '%' . $request->search . '%')
                    ->orWhere('title_e', 'like', '%' . $request->search . '%');
            }

            if ($request->serial_id) {
                $q->where('serial_id', $request->serial_id);
            }

        })->latest();

        return ['data' => $models->paginate($request->per_page), 'paginate' => true];

    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {

            $this->model->create($request);
            cacheForget("Screens");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $this->model->where("id", $id)->update($request);
            $this->forget($id);
        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }

    public function addScreenToDocumentType($request)
    {
        $screen = $this->model->find($request->screen_id);
        if (!$screen) {
            throw new NotFoundException();
        }
        $screen->documentTypes()->attach($request->documentType_id);
    }

    public function removeScreenFromDocumentType($screen_id, $documentType_id)
    {
        $screen = $this->model->find($screen_id);
        if (!$screen) {
            throw new NotFoundException();
        }
        $screen->documentTypes()->detach($documentType_id);
    }
    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    private function forget($id)
    {
        $keys = [
            "Screens",
            "Screens_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }
    }
}
