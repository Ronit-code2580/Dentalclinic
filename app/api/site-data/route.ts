import { NextResponse } from 'next/server';

import siteData from '@/data/site-data.json';

export async function GET() {
  return NextResponse.json(siteData);
}
