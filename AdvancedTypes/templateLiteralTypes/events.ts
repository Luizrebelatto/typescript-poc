type Entities = "user" | "app" | "shop";
type Actions = "created" | "updated" | "deleted";

type EventName = `${Entities}.${Actions}`;

function emitEvent(event: EventName, payload: unknown) {
  console.log(`logs: ${event}`, payload);
}

emitEvent("user.created", { id: "luiz" });
emitEvent("shop.updated", { id: "test" });
emitEvent("banana.deleted", {}); // Argument of type '"banana.deleted"' is not assignable to parameter of type '"user.created"
