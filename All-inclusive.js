/*
Input:
  a string strng
  an array of strings arr

Output of function
contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
  a boolean true if all rotations of strng are included in arr
  false otherwise

Example:
  contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

Note:
  Though not correct in a mathematical sense.
  We will consider that there are no rotations of strng == "".
  And for any array arr: contain_all_rots("", arr) --> true.
*/