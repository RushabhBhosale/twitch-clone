// Unit tests for: onBlock

import { blockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";
import { onBlock } from "../block";

// Mock the dependencies
jest.mock("@/lib/block-service", () => ({
  blockUser: jest.fn(),
  unBlockUser: jest.fn(),
}));

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

describe("onBlock() onBlock method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy path tests
  describe("Happy Path", () => {
    it("should block a user and revalidate paths when blockUser returns a user", async () => {
      // Arrange: Set up the mock to return a blocked user
      const mockBlockedUser = { blocked: { username: "testuser" } };
      (blockUser as jest.Mock).mockResolvedValue(mockBlockedUser);

      // Act: Call the onBlock function
      const result = await onBlock("123");

      // Assert: Verify the expected behavior
      expect(blockUser).toHaveBeenCalledWith("123");
      expect(revalidatePath).toHaveBeenCalledWith("/");
      expect(revalidatePath).toHaveBeenCalledWith("/testuser");
      expect(result).toEqual(mockBlockedUser);
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    it("should handle the case when blockUser returns null", async () => {
      // Arrange: Set up the mock to return null
      (blockUser as jest.Mock).mockResolvedValue(null);

      // Act: Call the onBlock function
      const result = await onBlock("123");

      // Assert: Verify the expected behavior
      expect(blockUser).toHaveBeenCalledWith("123");
      expect(revalidatePath).toHaveBeenCalledWith("/");
      expect(revalidatePath).not.toHaveBeenCalledWith("/undefined");
      expect(result).toBeNull();
    });

    it("should handle the case when blockUser throws an error", async () => {
      // Arrange: Set up the mock to throw an error
      const error = new Error("Failed to block user");
      (blockUser as jest.Mock).mockRejectedValue(error);

      // Act & Assert: Call the onBlock function and expect it to throw
      await expect(onBlock("123")).rejects.toThrow("Failed to block user");

      // Verify that revalidatePath is not called
      expect(revalidatePath).not.toHaveBeenCalled();
    });
  });
});

// End of unit tests for: onBlock
