import { useState } from "react";
import { Button, Card, Slider, Stack, Text } from "@mantine/core";

export function ActionBar() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  return (
    <Card>
      <Stack spacing={20}>
        <Text fz="md">Height</Text>

        <Slider
          value={height}
          onChange={setHeight}
          defaultValue={0}
          min={0}
          max={20}
          label={(value) => value.toFixed(1)}
          step={1}
        />

        <Text fz="md">Width</Text>

        <Slider
          value={width}
          onChange={setWidth}
          defaultValue={0}
          min={0}
          max={20}
          label={(value) => value.toFixed(1)}
          step={1}
        />

        <Button>Reset</Button>

        <Button>Start</Button>
      </Stack>
    </Card>
  );
}
