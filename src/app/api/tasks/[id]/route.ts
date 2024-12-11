import { connectDb } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';
import { TaskModel } from '@/models/task';

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    await connectDb();
    const resolvedParams = await params; // paramsをawaitで解決
    const task = await TaskModel.findById(resolvedParams.id);

    if (!task) {
      return NextResponse.json(
        { message: 'タスクが存在しません' },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: 'タスク取得成功', task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'タスク取得失敗' }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
