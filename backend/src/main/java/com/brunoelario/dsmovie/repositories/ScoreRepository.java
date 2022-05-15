package com.brunoelario.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunoelario.dsmovie.entities.Score;
import com.brunoelario.dsmovie.entities.ScorePk;

public interface ScoreRepository extends JpaRepository<Score, ScorePk> {
	

}
