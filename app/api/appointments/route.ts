import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const appointmentsPath = path.join(process.cwd(), 'data', 'appointments.json');

async function readAppointments() {
  try {
    const content = await fs.readFile(appointmentsPath, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAppointments(entries: unknown[]) {
  await fs.mkdir(path.dirname(appointmentsPath), { recursive: true });
  await fs.writeFile(appointmentsPath, JSON.stringify(entries, null, 2));
}

export async function GET() {
  const appointments = await readAppointments();
  return NextResponse.json({ appointments });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Appointment id is required.' }, { status: 400 });
  }

  const appointments = await readAppointments();
  const filtered = appointments.filter((appointment) => appointment.id !== id);
  await writeAppointments(filtered);

  return NextResponse.json({ success: true, deletedId: id });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body ?? {};

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Name, phone, email, and service are required.' },
        { status: 400 }
      );
    }

    const appointment = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      service,
      message: message ?? '',
      createdAt: new Date().toISOString(),
    };

    const appointments = await readAppointments();
    appointments.push(appointment);
    await writeAppointments(appointments);

    return NextResponse.json({ success: true, appointment }, { status: 201 });
  } catch (error) {
    console.error('Appointment save failed', error);
    return NextResponse.json(
      { error: 'Could not save appointment.' },
      { status: 500 }
    );
  }
}
