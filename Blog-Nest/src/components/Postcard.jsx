import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import appWriteService from "../appwrite/conf";
import { Link } from "react-router";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={appWriteService.getFilePreview(featuredImage)}
            height={160}
            alt={title}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {title}
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </Link>
  );
}

export default Postcard;
