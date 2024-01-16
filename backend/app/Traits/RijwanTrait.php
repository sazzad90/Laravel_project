<?php

// namespace App\Traits;

// trait RijwanTrait
// {

//     protected static function testPurpose()
//     {
//         return response()->json('these input is going for test purpose');
//     }
// } 



namespace App\Traits;

use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\Response;

trait ResponseTwo
{

    protected $statusCode = Response::HTTP_OK;

    public function respondWithToken($token, $user = NULL, $userType = null, $expiration = NULL)
    {
        return $this->response([
            'access_token' => $token,
            'user' => $user,
            'user_type' => $userType,
            'token_type' => 'bearer',
            'expires_in' => $expiration
        ]);
    }
    public function respond($data, $headers = [])
    {
        return Response::json($data, $this->getStatusCode(), $headers);
    }
}
