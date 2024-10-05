import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');

  // Aquí puedes agregar lógica para guardar los datos en una base de datos
  // Por ejemplo, puedes usar MongoDB, Supabase, etc.

  // Para este ejemplo, simplemente devolvemos una respuesta de éxito
  return new Response(JSON.stringify({ message: 'Registro exitoso' }), { status: 200 });
};
