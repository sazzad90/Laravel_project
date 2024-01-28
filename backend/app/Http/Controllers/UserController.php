<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getProfile(Request $request)
    {
        try {
            $fields = $request->validate(['email' => 'required']);
            $user = User::whereEmail($fields['email'])->first();
            $response = [
                'user' => $user,
                'message' => 'profile data'
            ];
            return response($response);
        } catch (Exception $e) {
            return response($e);
        }
    }
    public function updateProfile(Request $request)
    {
        try {
            $fields = $request->validate(['prevEmail' => 'required', 'name' => 'required', 'email' => 'required', 'about' => 'required']);

            $updatedUser = User::where('email', $fields['prevEmail'])->update([
                'name' => $fields['name'],
                'about' => $fields['about'],
                'email' => $fields['email'],
            ]);
            $response = User::whereEmail($fields['email'])->first(); //
            return response($response);
        } catch (Exception $e) {
            return response($e);
        }
    }
}
