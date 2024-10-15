import { Skill } from "@/types/skill";

export class Job {
    title: string;
    employer: string;
    dateRange: string;
    duration: string; 
    location: string;
    description: string;
    skills: Skill[];
  constructor(
    title: string, 
    employer: string,
    dateRange: string,
    duration: string, 
    location: string,
    description: string,
    skills: Skill[]
  ) {
    this.title = title 
    this.employer = employer 
    this.dateRange = dateRange 
    this.duration = duration 
    this.location = location 
    this.description = description 
    this.skills = skills 
    this.title = title 
  }
}
