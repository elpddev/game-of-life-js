import { useState } from "react";
import { Button, Card, Slider, Stack, Text } from "@mantine/core";

export function ActionBar({
  isOn,
  height,
  width,
  onToggle,
  onWidthChange,
  onHeightChange,
}: {
  isOn: boolean;
  height: number;
  width: number;
  onToggle: () => void;
  onWidthChange: (width: number) => void;
  onHeightChange: (width: number) => void;
}) {
  return (
    <Card>
      <Stack spacing={20}>
        <Text fz="md">Height</Text>

        <Slider
          value={height}
          onChange={onHeightChange}
          defaultValue={0}
          min={0}
          max={20}
          label={(value) => value.toFixed(1)}
          step={1}
        />

        <Text fz="md">Width</Text>

        <Slider
          value={width}
          onChange={onWidthChange}
          defaultValue={0}
          min={0}
          max={20}
          label={(value) => value.toFixed(1)}
          step={1}
        />

        <Button>Reset</Button>

        <Button onClick={onToggle}>{isOn ? "Pause" : "Start"}</Button>
      </Stack>
    </Card>
  );
}
