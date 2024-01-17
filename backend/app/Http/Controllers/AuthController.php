<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $fields = $request->validate([
                'name' => 'required',
                'email' => 'required|unique:user,email',
                'password' => 'required',
            ]);
        } catch (Exception $e) {
            return $e;
        }
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password'])
        ]);


        $token = $user->createToken('myappToken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response);
    }


    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        $user = User::whereEmail($fields['email'])->first();

        if ((Hash::check($fields['password'], $user['password']))) {
            $token = $user->createToken('myappToken')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token,
                'message' => 'Logged in'
            ];
            return response($response);
        }
        return response([
            'message' => 'wrong credentials'
        ]);
    }
}
