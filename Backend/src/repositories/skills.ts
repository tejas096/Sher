import Project from "../models/project";
import Skill from "../models/skills";
import { ISkill } from "../types/skills";
import { ExpressError } from "../utils/ExpressError";

export const createSkill = async (data: ISkill): Promise<ISkill> => {
  const skill = new Skill(data);
  return await skill.save();
};

export const findAll = async (owner: string): Promise<ISkill[]> => {
  return await Skill.find({ owner: owner });
};

export const findSkillById = async (id: string): Promise<ISkill | null> => {
  return await Skill.findById(id);
};

export const deleteSkillById = async (id: string): Promise<void> => {
  await Skill.findByIdAndDelete(id);
};

export const deleteSkillbyProjects = async (id: string): Promise<void> => {
  await Project.updateMany({ techStack: id }, { $pull: { techStack: id } });
};

export const changeShow = async (id: string): Promise<ISkill> => {
  const skill = await Skill.findById(id);
  if (!skill) throw new ExpressError(500, "Skill not found");
  skill.show = !skill.show;
  return await skill.save();
};
