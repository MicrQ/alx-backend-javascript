export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(e.toString());
  } finally {
    queue.push("Guardrail was processed");
  }
  return queue;
}
