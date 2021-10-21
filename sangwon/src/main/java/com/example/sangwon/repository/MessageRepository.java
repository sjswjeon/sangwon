package com.example.sangwon.repository;

import com.example.sangwon.Model.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    Page<Message> findAllBySender(String sender, Pageable pageable);
    Page<Message> findAllByReceiver(String receiver, Pageable pageable);
}
