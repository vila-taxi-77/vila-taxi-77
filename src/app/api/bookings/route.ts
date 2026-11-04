
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "Chức năng nhận yêu cầu đặt xe chưa được kết nối.",
    },
    { status: 501 },
  );
}
